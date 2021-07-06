import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeSumFieldsModelBase } from "./PokemonV2ItemattributeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeSumFieldsModel */
export interface PokemonV2ItemattributeSumFieldsModelType extends Instance<typeof PokemonV2ItemattributeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeSumFieldsModel */
export { selectFromPokemonV2ItemattributeSumFields, pokemonV2ItemattributeSumFieldsModelPrimitives, PokemonV2ItemattributeSumFieldsModelSelector } from "./PokemonV2ItemattributeSumFieldsModel.base"

/**
 * PokemonV2ItemattributeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemattributeSumFieldsModel = PokemonV2ItemattributeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
