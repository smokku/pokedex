import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameVarianceFieldsModelBase } from "./PokemonV2MovemetaailmentnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameVarianceFieldsModel */
export interface PokemonV2MovemetaailmentnameVarianceFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameVarianceFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameVarianceFields, pokemonV2MovemetaailmentnameVarianceFieldsModelPrimitives, PokemonV2MovemetaailmentnameVarianceFieldsModelSelector } from "./PokemonV2MovemetaailmentnameVarianceFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetaailmentnameVarianceFieldsModel = PokemonV2MovemetaailmentnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
