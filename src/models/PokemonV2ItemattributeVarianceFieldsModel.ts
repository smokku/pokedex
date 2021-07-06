import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeVarianceFieldsModelBase } from "./PokemonV2ItemattributeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeVarianceFieldsModel */
export interface PokemonV2ItemattributeVarianceFieldsModelType extends Instance<typeof PokemonV2ItemattributeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeVarianceFieldsModel */
export { selectFromPokemonV2ItemattributeVarianceFields, pokemonV2ItemattributeVarianceFieldsModelPrimitives, PokemonV2ItemattributeVarianceFieldsModelSelector } from "./PokemonV2ItemattributeVarianceFieldsModel.base"

/**
 * PokemonV2ItemattributeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemattributeVarianceFieldsModel = PokemonV2ItemattributeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
