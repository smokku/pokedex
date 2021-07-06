import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterSumFieldsModelBase } from "./PokemonV2EncounterSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterSumFieldsModel */
export interface PokemonV2EncounterSumFieldsModelType extends Instance<typeof PokemonV2EncounterSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterSumFieldsModel */
export { selectFromPokemonV2EncounterSumFields, pokemonV2EncounterSumFieldsModelPrimitives, PokemonV2EncounterSumFieldsModelSelector } from "./PokemonV2EncounterSumFieldsModel.base"

/**
 * PokemonV2EncounterSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterSumFieldsModel = PokemonV2EncounterSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
