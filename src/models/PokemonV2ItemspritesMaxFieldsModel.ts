import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesMaxFieldsModelBase } from "./PokemonV2ItemspritesMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesMaxFieldsModel */
export interface PokemonV2ItemspritesMaxFieldsModelType extends Instance<typeof PokemonV2ItemspritesMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesMaxFieldsModel */
export { selectFromPokemonV2ItemspritesMaxFields, pokemonV2ItemspritesMaxFieldsModelPrimitives, PokemonV2ItemspritesMaxFieldsModelSelector } from "./PokemonV2ItemspritesMaxFieldsModel.base"

/**
 * PokemonV2ItemspritesMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemspritesMaxFieldsModel = PokemonV2ItemspritesMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
