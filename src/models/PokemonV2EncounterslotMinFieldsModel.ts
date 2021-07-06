import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotMinFieldsModelBase } from "./PokemonV2EncounterslotMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotMinFieldsModel */
export interface PokemonV2EncounterslotMinFieldsModelType extends Instance<typeof PokemonV2EncounterslotMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotMinFieldsModel */
export { selectFromPokemonV2EncounterslotMinFields, pokemonV2EncounterslotMinFieldsModelPrimitives, PokemonV2EncounterslotMinFieldsModelSelector } from "./PokemonV2EncounterslotMinFieldsModel.base"

/**
 * PokemonV2EncounterslotMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterslotMinFieldsModel = PokemonV2EncounterslotMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
