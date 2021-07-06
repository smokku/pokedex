import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationVarianceFieldsModelBase } from "./PokemonV2PokemonformgenerationVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationVarianceFieldsModel */
export interface PokemonV2PokemonformgenerationVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationVarianceFieldsModel */
export { selectFromPokemonV2PokemonformgenerationVarianceFields, pokemonV2PokemonformgenerationVarianceFieldsModelPrimitives, PokemonV2PokemonformgenerationVarianceFieldsModelSelector } from "./PokemonV2PokemonformgenerationVarianceFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonformgenerationVarianceFieldsModel = PokemonV2PokemonformgenerationVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
