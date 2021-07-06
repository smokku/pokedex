import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotSumFieldsModelBase } from "./PokemonV2EncounterslotSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotSumFieldsModel */
export interface PokemonV2EncounterslotSumFieldsModelType extends Instance<typeof PokemonV2EncounterslotSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotSumFieldsModel */
export { selectFromPokemonV2EncounterslotSumFields, pokemonV2EncounterslotSumFieldsModelPrimitives, PokemonV2EncounterslotSumFieldsModelSelector } from "./PokemonV2EncounterslotSumFieldsModel.base"

/**
 * PokemonV2EncounterslotSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterslotSumFieldsModel = PokemonV2EncounterslotSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
