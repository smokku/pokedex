import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatStddevPopFieldsModelBase } from "./PokemonV2PokemonhabitatStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatStddevPopFieldsModel */
export interface PokemonV2PokemonhabitatStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatStddevPopFieldsModel */
export { selectFromPokemonV2PokemonhabitatStddevPopFields, pokemonV2PokemonhabitatStddevPopFieldsModelPrimitives, PokemonV2PokemonhabitatStddevPopFieldsModelSelector } from "./PokemonV2PokemonhabitatStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonhabitatStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonhabitatStddevPopFieldsModel = PokemonV2PokemonhabitatStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
