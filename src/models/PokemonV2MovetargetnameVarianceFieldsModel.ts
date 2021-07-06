import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameVarianceFieldsModelBase } from "./PokemonV2MovetargetnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameVarianceFieldsModel */
export interface PokemonV2MovetargetnameVarianceFieldsModelType extends Instance<typeof PokemonV2MovetargetnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameVarianceFieldsModel */
export { selectFromPokemonV2MovetargetnameVarianceFields, pokemonV2MovetargetnameVarianceFieldsModelPrimitives, PokemonV2MovetargetnameVarianceFieldsModelSelector } from "./PokemonV2MovetargetnameVarianceFieldsModel.base"

/**
 * PokemonV2MovetargetnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovetargetnameVarianceFieldsModel = PokemonV2MovetargetnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
