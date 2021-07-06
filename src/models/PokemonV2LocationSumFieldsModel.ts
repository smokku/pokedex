import { Instance } from "mobx-state-tree"
import { PokemonV2LocationSumFieldsModelBase } from "./PokemonV2LocationSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationSumFieldsModel */
export interface PokemonV2LocationSumFieldsModelType extends Instance<typeof PokemonV2LocationSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationSumFieldsModel */
export { selectFromPokemonV2LocationSumFields, pokemonV2LocationSumFieldsModelPrimitives, PokemonV2LocationSumFieldsModelSelector } from "./PokemonV2LocationSumFieldsModel.base"

/**
 * PokemonV2LocationSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationSumFieldsModel = PokemonV2LocationSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
