import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesStddevFieldsModelBase } from "./PokemonV2ItemspritesStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesStddevFieldsModel */
export interface PokemonV2ItemspritesStddevFieldsModelType extends Instance<typeof PokemonV2ItemspritesStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesStddevFieldsModel */
export { selectFromPokemonV2ItemspritesStddevFields, pokemonV2ItemspritesStddevFieldsModelPrimitives, PokemonV2ItemspritesStddevFieldsModelSelector } from "./PokemonV2ItemspritesStddevFieldsModel.base"

/**
 * PokemonV2ItemspritesStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemspritesStddevFieldsModel = PokemonV2ItemspritesStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
