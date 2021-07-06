import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesStddevPopFieldsModelBase } from "./PokemonV2PokemonformspritesStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesStddevPopFieldsModel */
export interface PokemonV2PokemonformspritesStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesStddevPopFieldsModel */
export { selectFromPokemonV2PokemonformspritesStddevPopFields, pokemonV2PokemonformspritesStddevPopFieldsModelPrimitives, PokemonV2PokemonformspritesStddevPopFieldsModelSelector } from "./PokemonV2PokemonformspritesStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonformspritesStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonformspritesStddevPopFieldsModel = PokemonV2PokemonformspritesStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
