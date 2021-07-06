import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameSumFieldsModelBase } from "./PokemonV2PokemonhabitatnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameSumFieldsModel */
export interface PokemonV2PokemonhabitatnameSumFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameSumFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameSumFields, pokemonV2PokemonhabitatnameSumFieldsModelPrimitives, PokemonV2PokemonhabitatnameSumFieldsModelSelector } from "./PokemonV2PokemonhabitatnameSumFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonhabitatnameSumFieldsModel = PokemonV2PokemonhabitatnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
