import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesStddevPopFieldsModelBase } from "./PokemonV2ItemspritesStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesStddevPopFieldsModel */
export interface PokemonV2ItemspritesStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemspritesStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesStddevPopFieldsModel */
export { selectFromPokemonV2ItemspritesStddevPopFields, pokemonV2ItemspritesStddevPopFieldsModelPrimitives, PokemonV2ItemspritesStddevPopFieldsModelSelector } from "./PokemonV2ItemspritesStddevPopFieldsModel.base"

/**
 * PokemonV2ItemspritesStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemspritesStddevPopFieldsModel = PokemonV2ItemspritesStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
