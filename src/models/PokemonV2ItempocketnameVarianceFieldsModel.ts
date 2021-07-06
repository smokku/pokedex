import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameVarianceFieldsModelBase } from "./PokemonV2ItempocketnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameVarianceFieldsModel */
export interface PokemonV2ItempocketnameVarianceFieldsModelType extends Instance<typeof PokemonV2ItempocketnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameVarianceFieldsModel */
export { selectFromPokemonV2ItempocketnameVarianceFields, pokemonV2ItempocketnameVarianceFieldsModelPrimitives, PokemonV2ItempocketnameVarianceFieldsModelSelector } from "./PokemonV2ItempocketnameVarianceFieldsModel.base"

/**
 * PokemonV2ItempocketnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItempocketnameVarianceFieldsModel = PokemonV2ItempocketnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
