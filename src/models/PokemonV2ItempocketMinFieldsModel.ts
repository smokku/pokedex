import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketMinFieldsModelBase } from "./PokemonV2ItempocketMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketMinFieldsModel */
export interface PokemonV2ItempocketMinFieldsModelType extends Instance<typeof PokemonV2ItempocketMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketMinFieldsModel */
export { selectFromPokemonV2ItempocketMinFields, pokemonV2ItempocketMinFieldsModelPrimitives, PokemonV2ItempocketMinFieldsModelSelector } from "./PokemonV2ItempocketMinFieldsModel.base"

/**
 * PokemonV2ItempocketMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItempocketMinFieldsModel = PokemonV2ItempocketMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
