import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatVarianceFieldsModelBase } from "./PokemonV2PokemonhabitatVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatVarianceFieldsModel */
export interface PokemonV2PokemonhabitatVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatVarianceFieldsModel */
export { selectFromPokemonV2PokemonhabitatVarianceFields, pokemonV2PokemonhabitatVarianceFieldsModelPrimitives, PokemonV2PokemonhabitatVarianceFieldsModelSelector } from "./PokemonV2PokemonhabitatVarianceFieldsModel.base"

/**
 * PokemonV2PokemonhabitatVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonhabitatVarianceFieldsModel = PokemonV2PokemonhabitatVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
