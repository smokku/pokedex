import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextMaxFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextMaxFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextMaxFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextMaxFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextMaxFields, pokemonV2MoveeffectchangeeffecttextMaxFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextMaxFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextMaxFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveeffectchangeeffecttextMaxFieldsModel = PokemonV2MoveeffectchangeeffecttextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
