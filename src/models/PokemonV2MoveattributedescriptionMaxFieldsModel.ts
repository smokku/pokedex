import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionMaxFieldsModelBase } from "./PokemonV2MoveattributedescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionMaxFieldsModel */
export interface PokemonV2MoveattributedescriptionMaxFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionMaxFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionMaxFields, pokemonV2MoveattributedescriptionMaxFieldsModelPrimitives, PokemonV2MoveattributedescriptionMaxFieldsModelSelector } from "./PokemonV2MoveattributedescriptionMaxFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveattributedescriptionMaxFieldsModel = PokemonV2MoveattributedescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
