import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodSumFieldsModelBase } from "./PokemonV2EncountermethodSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodSumFieldsModel */
export interface PokemonV2EncountermethodSumFieldsModelType extends Instance<typeof PokemonV2EncountermethodSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodSumFieldsModel */
export { selectFromPokemonV2EncountermethodSumFields, pokemonV2EncountermethodSumFieldsModelPrimitives, PokemonV2EncountermethodSumFieldsModelSelector } from "./PokemonV2EncountermethodSumFieldsModel.base"

/**
 * PokemonV2EncountermethodSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncountermethodSumFieldsModel = PokemonV2EncountermethodSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
