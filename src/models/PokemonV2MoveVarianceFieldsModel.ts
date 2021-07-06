import { Instance } from "mobx-state-tree"
import { PokemonV2MoveVarianceFieldsModelBase } from "./PokemonV2MoveVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveVarianceFieldsModel */
export interface PokemonV2MoveVarianceFieldsModelType extends Instance<typeof PokemonV2MoveVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveVarianceFieldsModel */
export { selectFromPokemonV2MoveVarianceFields, pokemonV2MoveVarianceFieldsModelPrimitives, PokemonV2MoveVarianceFieldsModelSelector } from "./PokemonV2MoveVarianceFieldsModel.base"

/**
 * PokemonV2MoveVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveVarianceFieldsModel = PokemonV2MoveVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
