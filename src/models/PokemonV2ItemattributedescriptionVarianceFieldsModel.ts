import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionVarianceFieldsModelBase } from "./PokemonV2ItemattributedescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionVarianceFieldsModel */
export interface PokemonV2ItemattributedescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionVarianceFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionVarianceFields, pokemonV2ItemattributedescriptionVarianceFieldsModelPrimitives, PokemonV2ItemattributedescriptionVarianceFieldsModelSelector } from "./PokemonV2ItemattributedescriptionVarianceFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemattributedescriptionVarianceFieldsModel = PokemonV2ItemattributedescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
