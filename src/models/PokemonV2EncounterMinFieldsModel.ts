import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterMinFieldsModelBase } from "./PokemonV2EncounterMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterMinFieldsModel */
export interface PokemonV2EncounterMinFieldsModelType extends Instance<typeof PokemonV2EncounterMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterMinFieldsModel */
export { selectFromPokemonV2EncounterMinFields, pokemonV2EncounterMinFieldsModelPrimitives, PokemonV2EncounterMinFieldsModelSelector } from "./PokemonV2EncounterMinFieldsModel.base"

/**
 * PokemonV2EncounterMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterMinFieldsModel = PokemonV2EncounterMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
