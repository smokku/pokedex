import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameMinFieldsModelBase } from "./PokemonV2EncounterconditionnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameMinFieldsModel */
export interface PokemonV2EncounterconditionnameMinFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameMinFieldsModel */
export { selectFromPokemonV2EncounterconditionnameMinFields, pokemonV2EncounterconditionnameMinFieldsModelPrimitives, PokemonV2EncounterconditionnameMinFieldsModelSelector } from "./PokemonV2EncounterconditionnameMinFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionnameMinFieldsModel = PokemonV2EncounterconditionnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
