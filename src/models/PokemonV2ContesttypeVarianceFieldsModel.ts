import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeVarianceFieldsModelBase } from "./PokemonV2ContesttypeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeVarianceFieldsModel */
export interface PokemonV2ContesttypeVarianceFieldsModelType extends Instance<typeof PokemonV2ContesttypeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeVarianceFieldsModel */
export { selectFromPokemonV2ContesttypeVarianceFields, pokemonV2ContesttypeVarianceFieldsModelPrimitives, PokemonV2ContesttypeVarianceFieldsModelSelector } from "./PokemonV2ContesttypeVarianceFieldsModel.base"

/**
 * PokemonV2ContesttypeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesttypeVarianceFieldsModel = PokemonV2ContesttypeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
