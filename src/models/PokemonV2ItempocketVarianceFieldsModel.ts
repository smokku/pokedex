import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketVarianceFieldsModelBase } from "./PokemonV2ItempocketVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketVarianceFieldsModel */
export interface PokemonV2ItempocketVarianceFieldsModelType extends Instance<typeof PokemonV2ItempocketVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketVarianceFieldsModel */
export { selectFromPokemonV2ItempocketVarianceFields, pokemonV2ItempocketVarianceFieldsModelPrimitives, PokemonV2ItempocketVarianceFieldsModelSelector } from "./PokemonV2ItempocketVarianceFieldsModel.base"

/**
 * PokemonV2ItempocketVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItempocketVarianceFieldsModel = PokemonV2ItempocketVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
