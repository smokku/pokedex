import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeVarianceFieldsModelBase } from "./PokemonV2PokemonformtypeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeVarianceFieldsModel */
export interface PokemonV2PokemonformtypeVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeVarianceFieldsModel */
export { selectFromPokemonV2PokemonformtypeVarianceFields, pokemonV2PokemonformtypeVarianceFieldsModelPrimitives, PokemonV2PokemonformtypeVarianceFieldsModelSelector } from "./PokemonV2PokemonformtypeVarianceFieldsModel.base"

/**
 * PokemonV2PokemonformtypeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonformtypeVarianceFieldsModel = PokemonV2PokemonformtypeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
